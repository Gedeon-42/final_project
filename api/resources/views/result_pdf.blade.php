<!-- resources/views/result_pdf.blade.php -->
<!DOCTYPE html>
<html>
<head>
    <title>Result Details</title>
    <style>
        body { font-family: Arial, sans-serif; }
        .section { margin-bottom: 20px; }
        .label { font-weight: bold; }
    </style>
</head>
<body>
    <h2>Result Details</h2>
    <div class="section">
        <span class="label">ID:</span> {{ $result->id }}
    </div>
    <div class="section">
        <span class="label">Mineral:</span> {{ $result->mineral }}
    </div>
    <div class="section">
        <span class="label">Batch Number:</span> {{ $result->batch_number }}
    </div>
    <div class="section">
        <span class="label">Date:</span> {{ $result->date }}
    </div>
    <div class="section">
        <span class="label">Quantity:</span> {{ $result->quantity }}
    </div>
    <div class="section">
        <span class="label">Gross Weight:</span> {{ $result->gross_weight }}
    </div>
    <div class="section">
        <span class="label">Net Weight:</span> {{ $result->net_weight }}
    </div>
    <div class="section">
        <span class="label">Grade:</span> {{ $result->grade }}
    </div>
    <div class="section">
        <span class="label">Methodology:</span> {{ $result->methodology }}
    </div>
    <div class="section">
        <span class="label">Technician:</span> {{ $result->technician }}
    </div>
    <div class="section">
        <span class="label">Supervisor:</span> {{ $result->supervisor }}
    </div>
    <div class="section">
        <span class="label">Security:</span> {{ $result->security }}
    </div>
    <div class="section">
        <span class="label">Status:</span> {{ $result->status }}
    </div>
    <div class="section">
        <span class="label">Created At:</span> {{ $result->created_at }}
    </div>
    <div class="section">
        <span class="label">Updated At:</span> {{ $result->updated_at }}
    </div>
    <!-- Add more fields as needed -->
</body>
</html>