<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ImportSheet.aspx.cs" Inherits="WebApplicationTestImport.ImportSheet" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link rel="stylesheet" href="https://cdn.kendostatic.com/2014.3.1119/styles/kendo.common.min.css">
    <link rel="stylesheet" href="https://cdn.kendostatic.com/2014.3.1119/styles/kendo.rtl.min.css">
    <link rel="stylesheet" href="https://cdn.kendostatic.com/2014.3.1119/styles/kendo.default.min.css">
    <link rel="stylesheet" href="https://cdn.kendostatic.com/2014.3.1119/styles/kendo.dataviz.min.css">
    <link rel="stylesheet" href="https://cdn.kendostatic.com/2014.3.1119/styles/kendo.dataviz.default.min.css">
    <link rel="stylesheet" href="https://cdn.kendostatic.com/2014.3.1119/styles/kendo.mobile.all.min.css">

    <script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
    <script src="https://cdn.kendostatic.com/2014.3.1119/js/angular.min.js"></script>
    <script src="https://cdn.kendostatic.com/2014.3.1119/js/jszip.min.js"></script>
    <script src="https://cdn.kendostatic.com/2014.3.1119/js/kendo.all.min.js"></script>
</head>
<body>
<%--    <form id="form1" runat="server">
        <div>
        </div>
    </form>--%>

    <input id="txtSheetID" type="text" placeholder="enter sheet ID" />
    <input id="txtSheetName" type="text" placeholder="enter sheet Name" />
    <input id="btnDisplayData" type="button" value="button"  onclick="init();"/>
    <script src="Sheet.js"></script>

    <div id="grid"></div>
</body>
</html>
