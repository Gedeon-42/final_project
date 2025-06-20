<!DOCTYPE html>
<html>
<head>
    <title>Result Available</title>
</head>
<body style="margin:0; padding:0; background:#f4f4f4;">
    <div style="max-width:600px; margin:40px auto; background:#fff; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.06); font-family:Arial,Helvetica,sans-serif; padding:32px;">
        <div style="text-align:center; margin-bottom:24px;">
            <img src="https://difali.com/logo1.jpg" alt="DIFALI Logo" style="max-width:120px; margin-bottom:16px;">
            <h2 style="color:#2d3748; margin:0;">Result Available</h2>
        </div>
        <p style="font-size:16px; color:#333;">Dear <strong>{{ $result->result?->supplier?->name ?? 'Supplier' }},</strong>,</p>
        <p style="font-size:16px; color:#333;">
            We’re excited to let you kno that your Result is available
        <div style="background:#f0f4fa; border-radius:6px; padding:16px 20px; margin:24px 0;">
            <h3 style="margin:0 0 8px 0; color:#2563eb;">Some of  Details</h3>
            <p style="margin:0; font-size:15px;"><strong>Weight:</strong>  {{ $result->result?->mineral_type ?? '-' }}</p>
              <p style="margin:0; font-size:15px;"><strong>Delivered At:</strong>  {{ $result->result?->created_at?->format('d M Y') ?? '-' }}</p>
        </div>
        <h4 style="color:#2563eb; margin-top:0;">What’s Next?</h4>
        <ul style="font-size:15px; color:#333; padding-left:20px;">
            <li>Log in to your dashboard to explore to track your delievery.</li>
           
            <li>If this is your first time with us, fill free to ask.</li>
        </ul>
        @component('mail::button', ['url' => 'http://localhost:3000/'])
View in Portal
@endcomponent
        <p style="font-size:15px; color:#333;">
            If you have any questions or need support, feel free to reach out to us at <a href="mailto:opinagroup@gmail.com" style="color:#2563eb;">info@mining.gmail.com</a> or reply to this message.
        </p>
        <p style="font-size:15px; color:#333;">Wishing you all the best in your Mining Journey!</p>
        {{-- <p style="font-size:15px; color:#333; margin-bottom:0;">
            Warm regards,<br>
            <strong>DIFALI Team</strong><br>
            Opinagroup<br>
            <a href="https://difali.com/" style="color:#2563eb;">https://difali.com/</a>
        </p> --}}
    </div>
</body>
</html>



