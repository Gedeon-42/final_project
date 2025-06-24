<!DOCTYPE html>
<html>
<body style="margin:0; padding:0; background:#f4f4f4;">
      <div style="max-width:600px; margin:40px auto; background:#fff; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.06); font-family:Arial,Helvetica,sans-serif; padding:32px;">
        <div style="text-align:center; margin-bottom:24px;">
            <img src="http://localhost:3000/logo1.jpg"  style="max-width:120px; margin-bottom:16px;">
            <h2 style="color:#2d3748; margin:0;">Result Available</h2>
        </div>
    <p>Hello {{ $name }},</p>
    <p>You requested a password reset. Use this token to reset your password:</p>
    <p>
        <a href="http://localhost:3000/reset-password?token={{ $token }}&email={{ urlencode($email) }}">
            Reset Password
        </a>
    </p>
    <p>If you did not request this, please ignore this email.</p>
      </div>
</body>
</html>