<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Programming Challenges</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/css/bootstrap.min.css"/>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="css/main.css"/>
  <base href="/" />
</head>
<body ng-app="challengesApp" ng-controller="sidebarCtrl as main">

<div class="nav-side-menu">
  <div class="profile-info text-centered">
    <div class="profile-pic">
      <a ui-sref="main"><img src="https://cloud.githubusercontent.com/assets/9697628/10774653/dfa362a4-7d02-11e5-859e-e69c613892a9.jpg"></a>
    </div>
      <a ui-sref="main" style="text-decoration:none;"><span class="tagline">Programming Challenges</span></a>
    </div>
      <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
    <div class="menu-list">
      <ul id="menu-content" class="menu-content collapse in">
        <li>
          <a ui-sref="main"><i class="fa fa-home fa-lg"></i> Home </a>
        </li>

        <li data-toggle="collapse" data-target="#challenges" class="collapsed">
          <a ui-sref="challenges"><i class="fa fa-keyboard-o fa-lg"></i> Challenges <span class="arrow"></span></a>
        </li>  
          <ul class="sub-menu collapse" id="challenges">

            <li><a ui-sref="challenges-00">00 - Name Generator <i class="fa fa-check fa-lg"></i></a></li>
            <li><a ui-sref="challenges-01">01 - Higher/Lower </a></li>
            <li><a ui-sref="challenges-99">99 - Enigma Machine Simulator </a></li>

            <li ng-repeat="challenge in main.challenges">
              <a ui-sref="challenges-{challenge.num}">{{challenge.num}} - {{challenge.info[0]}}{{challenge.info[1]}} </a>
            </li>

          </ul>

      </ul>
     </div>
</div>

<div ui-view class="mainview"></div>

  <script src="challenges/js/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/js/bootstrap.min.js"></script>
  <script src="challenges/js/angular.min.js"></script>
  <script src="challenges/js/angular-ui-router.min.js"></script>
  <script src="challenges/js/app.js"></script>
  <script src="challenges/js/app.config.js"></script>

</body>
</html>
