
    function resizeApply() { 
        var minWidth = 1200; 
        var minWidth2 = 1000;
        var mp_container = document.getElementsByClassName('mp_container')[0]; 
        

        if (window.innerWidth < minWidth) { 
            mp_container.style.zoom = (window.innerWidth / minWidth2);
            
            var mpZoom = mp_container.style.zoom;

           
        }
        else mpZoom = 1; 
        } 
            window.onload = function() { 
            window.addEventListener('resize', function() { resizeApply(); 
            }); 
        } 
        resizeApply();




        


     

        



