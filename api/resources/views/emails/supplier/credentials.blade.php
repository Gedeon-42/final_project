@component('mail::message')
# Welcome to Mineral Processing System

Your supplier account has been created.

**Login Credentials:**

- **Email:** {{ $email }}
- **Password:** {{ $password }}

@component('mail::button', ['url' => 'https://your-app-url.com/login'])
Login Now
@endcomponent

Thanks,  
{{ config('app.name') }}
@endcomponent
