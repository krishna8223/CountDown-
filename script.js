

    const Top = document.getElementsByClassName('top')
    const min = document.getElementsByClassName('minute')
    const hr = document.getElementsByClassName('hour')
    const sec = document.getElementsByClassName('sec')
    const second_div = document.getElementsByClassName('second_div')
    const minute_div = document.getElementsByClassName('minute_div')
    const num = document.getElementsByClassName('num')
    const hour_div = document.getElementsByClassName('hour_div')
   const Day_input = document.getElementById('day_input');
    const second_input = document.getElementById('second_input');
    const minute_input = document.getElementById('minute_input');
    const hour_input = document.getElementById('hour_input');
   
    const mili_second_div = document.getElementsByClassName('mili_second_div')
    const mili_sec=document.getElementsByClassName('mili_sec')



    let interval;




    let mili_seconds= 0
    let hour = 00
    let minute = 00
    let second = 00


    const get = (e) =>{
        if(second_input.value > 60 || second_input.value<0){
            alert('Please enter value of Second less than 60 or 0')
            return
        }
        if(minute_input.value > 60 || minute_input.value<0){
            alert('Please enter value of minute less than 60 or 0')

            return
        }
        if(hour_input.value > 24 || second_input.value<0){
            alert('Please enter value of Hour less than 24 or 0')
            return
        }
        second = second_input.value
        minute = minute_input.value
        hour = hour_input.value
        console.log(second,minute,hour);
        setValue(sec,second)
        setValue(min,minute)
        setValue(hr,hour)
        clearInterval(interval)
        start()
        
    }
    setValue(mili_sec,mili_seconds)
    setValue(mili_sec,mili_seconds)
    setValue(sec,second)
    setValue(min,minute)
    setValue(hr,hour)





   
    function start() {
        interval = setInterval(() => {

            
            if(second!=0 ){

                flip(second_div)
                // second--
                setValue(sec,second) 
            }
            else{
                setValue(sec,second) 

            }
            if(mili_seconds!=0 ){

                // flip(mili_second_div)
                mili_seconds--
                    setValue(mili_sec,mili_seconds)

            }
            else{
                    setValue(mili_sec,mili_seconds)


            }



        // setTimeout(() => {
            if(second>0){

                if(mili_seconds==0){
                    mili_seconds = 60
                    second--
                    flip(second_div)
                    setValue(sec,second)
                }
            }
            if(minute>0){

                if(second==0){
                    second = 60
                    minute--
                    flip(minute_div)
                    setValue(min,minute)
                }
            }
            // else
            if(hour>0){

                if(minute ==0){
                    minute=60
                    hour--
                    flip(hour_div)
                    setValue(hr,hour)
                }
            }

        // }, 200);

    }, 16);


}

function check (){
    if(minute > 0 && second==0){
        second=60
    }
}

function flip(ele){
    ele[0].style.animation = 'flip .9s linear'
    ele[0].addEventListener('animationend',()=>{
            ele[0].style.removeProperty('animation')
        })
} 


function setValue (ele,value) {
    setTimeout(() => {
        
        if(value<=9){

            ele[0].innerHTML='0'+value
        }
        else{
            ele[0].innerHTML=value

        }
    }, 100);
}
