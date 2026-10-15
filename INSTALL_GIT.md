# تثبيت Git على Windows

## الطريقة 1: تحميل Git مباشرة (الأسهل)

1. اذهب إلى: [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. حمّل النسخة 64-bit
3. شغّل الملف المحمّل
4. اضغط "Next" على كل شيء (الإعدادات الافتراضية ممتازة)
5. بعد التثبيت، **أعد تشغيل VS Code**

## الطريقة 2: باستخدام Winget (إذا عندك Windows 11)

افتح PowerShell كمسؤول واكتب:
```powershell
winget install --id Git.Git -e --source winget
```

## التحقق من التثبيت

بعد التثبيت، أعد فتح PowerShell واكتب:
```bash
git --version
```

يجب أن ترى شيء مثل:
```
git version 2.43.0
```

---

## بعد التثبيت: رفع المشروع

```bash
# إعداد معلوماتك
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# رفع المشروع
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```
