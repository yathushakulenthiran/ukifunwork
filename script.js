SC.initialize({
  client_id: 'a3e059563d7fd3372b49b37f00a00bcf'
});

$(document).ready(function() {

  SC.stream('/tracks/179584967', function(sound) {
    $('#Start').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#Stop').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/169050238', function(sound) {
    $('#Start1').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#Stop1').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/399340539', function(sound) {
    $('#Start2').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#Stop2').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/345946410', function(sound) {
    $('#Start3').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#Stop3').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/258797552', function(sound) {
    $('#Start4').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#Stop4').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/314889863', function(sound) {
    $('#Start5').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#Stop5').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/89602719', function(sound) {
    $('#Start6').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#Stop6').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/497505642', function(sound) {
    $('#Start7').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#Stop7').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });
