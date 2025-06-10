@component('mail::message')
# Hello {{ $result->delivery->supplier->name }},

Your mineral delivery result is now available.

**Delivery Details:**
- **Mineral Type:** {{ $result->delivery->mineral_type }}
- **Weight:** {{ $result->delivery->weight }} kg
- **Delivered At:** {{ $result->delivery->created_at->format('d M Y') }}

**Result Analysis:**

{{-- {{ $result->analysis }} --}}

@component('mail::button', ['url' => 'https://your-app-url.com/login'])
View in Portal
@endcomponent

Thank you,  
{{ config('app.name') }}
@endcomponent
