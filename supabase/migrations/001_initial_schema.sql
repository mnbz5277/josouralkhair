-- جدول الحملات الإغاثية
CREATE TABLE campaigns (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  target_amount DECIMAL(10, 2) NOT NULL,
  raised_amount DECIMAL(10, 2) DEFAULT 0,
  image_url TEXT,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'paused')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- جدول التبرعات
CREATE TABLE donations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  campaign_id UUID REFERENCES campaigns(id) ON DELETE CASCADE,
  donor_email TEXT NOT NULL,
  donor_name TEXT,
  amount DECIMAL(10, 2) NOT NULL,
  currency TEXT DEFAULT 'USD' NOT NULL,
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'succeeded', 'failed', 'refunded')),
  payment_type TEXT DEFAULT 'one-time' CHECK (payment_type IN ('one-time', 'monthly')),
  stripe_payment_id TEXT UNIQUE,
  stripe_subscription_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- جدول إحصائيات الأثر
CREATE TABLE impact_stats (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  beneficiaries_count INTEGER DEFAULT 0,
  packages_distributed INTEGER DEFAULT 0,
  medical_services INTEGER DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- إدراج إحصائيات افتراضية
INSERT INTO impact_stats (beneficiaries_count, packages_distributed, medical_services)
VALUES (15000, 3500, 8200);

-- فهارس للأداء
CREATE INDEX idx_campaigns_status ON campaigns(status);
CREATE INDEX idx_donations_campaign_id ON donations(campaign_id);
CREATE INDEX idx_donations_payment_status ON donations(payment_status);
CREATE INDEX idx_donations_created_at ON donations(created_at DESC);

-- تفعيل Row Level Security
ALTER TABLE campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE impact_stats ENABLE ROW LEVEL SECURITY;

-- سياسات الأمان: الجميع يمكنهم القراءة
CREATE POLICY "Enable read access for all users" ON campaigns
  FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON donations
  FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON impact_stats
  FOR SELECT USING (true);

-- دالة تحديث raised_amount تلقائياً
CREATE OR REPLACE FUNCTION update_campaign_raised_amount()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.payment_status = 'succeeded' THEN
    UPDATE campaigns
    SET raised_amount = raised_amount + NEW.amount,
        updated_at = timezone('utc'::text, now())
    WHERE id = NEW.campaign_id;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- تفعيل التحديث التلقائي
CREATE TRIGGER trigger_update_campaign_raised
AFTER INSERT OR UPDATE OF payment_status ON donations
FOR EACH ROW
EXECUTE FUNCTION update_campaign_raised_amount();
