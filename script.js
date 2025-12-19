
        let y=0, speed=3;
        function bounce(){
            y+=speed;
            if(y>300||y<0)speed=-speed;
            pic1.style.top=y+ "px";
            images.style.top=y+ "px";
            requestAnimationFrame(bounce);
        }
        bounce();