@component('mail::message')
# Hello {{ $result->result?->supplier?->name ?? 'Supplier' }},

Your mineral delivery result is now available.

**Delivery Details:**
- **Mineral Type:** {{ $result->result?->mineral_type ?? '-' }}
- **Weight:** {{ $result->result?->weight ?? '-' }} kg
- **Delivered At:** {{ $result->result?->created_at?->format('d M Y') ?? '-' }}

**Result Analysis:**

{{-- {{ $result->analysis }} --}}

@component('mail::button', ['url' => 'http://localhost:3000/'])
View in Portal
@endcomponent

Thank you,  
{{ config('app.name') }}
@endcomponent