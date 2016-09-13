var $ = window.$;

//Fill in the background
var background = new Shape.Rectangle(view.bounds);
background.fillColor = "Red";

//Set up my initial path to draw
var path = new Path();
path.strokeColor = "black";

var public_key = 'v0yJoRRXKYcrpLdjzDqZ';
function drawData()
{
  $.ajax({
    url: 'https://data.sparkfun.com/output/' + public_key + '.json',
    data: {page: 1},
    dataType: 'jsonp',
  }).done(
    function(results)
    {
      console.log("Got " + results.length + " results");
      var incx = view.bounds.width / results.length;
      //Start at the middle left of the rectangle
      var loc = view.bounds.leftCenter - incx;
      path.remove();
      path = new Path();
      path.strokeColor = "black";
      path.moveTo(loc);
      for(var i = 0; i < results.length; i++)
      {
          row = results[i];
          loc = new Point(loc.x + incx,
                (parseFloat(row.my) - 95) * 80 + view.bounds.height/2 + 100);
          path.lineTo(loc);
      }
      /*
      $.each(results,
        function(index, row)
        {
          loc = new Point(loc.x + incx,
                (parseFloat(row.my) - 95) * 80 + view.bounds.height/2 + 100);
          path.lineTo(loc);
        }
      );
      */
      view.draw();
      window.setTimeout(drawData, 30000);
    }
  );
}
drawData();
