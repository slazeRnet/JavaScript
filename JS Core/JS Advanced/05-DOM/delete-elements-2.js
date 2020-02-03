<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Intro to DOM</title>
</head>
<body>
    <ul>
        <li id="list1">DOM Example 1</li>
        <li>DOM Example 2</li>
        <ul>
            <li id="first">first</li>
            <li>fdsfasd</li>
            <li>42342342</li>
            <li>fdsfas</li>
            <li>iiii</li>
        </ul>
    </ul>

    <script>
        let parent = document.getElementsByTagName('body')[0];
        let child = document.getElementById('list1');
        let child = document.getElementById('first'); // wont work because is nested
        parent.removeChild(child);
    </script>
</body>
</html>
