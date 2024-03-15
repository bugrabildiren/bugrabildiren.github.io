<!DOCTYPE html>
<html lang="en">
<head>
    <title>Java Jam Coffee House</title>
    <meta name="description" content="CENG 311 Inclass Activity 1" />
</head>
<body>

<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="GET">
    <table>
        <tr>
            <td>
                From:
            </td>
            <td>
                <input type="text" name="f_value" />
            </td>
            <td>
                Currency:
            </td>
            <td>
                <select name="f_currency">
                    <option value="USD"/>USD</option>
                    <option value="CAD"/>CAD</option>
                    <option value="EUR"/>EUR</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>
                To:
            </td>
            <td>
                <input type="text" name="t_value" readonly />
            </td>
            <td>
                Currency:
            </td>
            <td>
                <select name="t_currency">
                    <option value="USD">USD</option>
                    <option value="CAD">CAD</option>
                    <option value="EUR">EUR</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>                
            </td>
            <td>
            </td>
            <td>         
            </td>
            <td>
                <input type="submit" value="Convert" />
            </td>
        </tr>
    </table>
</form>

<?php
$exchange_rates = [
    'USD' => 1.0,
    'CAD' => 1.35,
    'EUR' => 0.92,

];

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    if(isset($_GET["f_value"]) && isset($_GET["f_currency"]) && isset($_GET["t_currency"])) {
        $f_value = $_GET["f_value"];
        $f_currency = $_GET["f_currency"];
        $t_currency = $_GET["t_currency"];

        if(is_numeric($f_value)) {
            $usd_amount = $f_value / $exchange_rates[$f_currency];
            $converted = $usd_amount * $exchange_rates[$t_currency];

            echo "<script>document.getElementsByName('t_value')[0].value = '$converted';</script>";

        } 
        else {

            echo "False";
        }
    }
}

?>
</body>
</html>