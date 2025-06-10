@component('mail::message')
# Welcome to Mineral Processing System

Your supplier account has been created.

**Login Credentials:**

- **Email:** {{ $email }}
- **Password:** {{ $password }}

@component('mail::button', ['url' => 'http://localhost:3000'])
Login Now
@endcomponent

Thanks,  
{{ config('app.name') }}
@endcomponent
