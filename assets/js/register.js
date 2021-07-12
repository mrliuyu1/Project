// 封装验证函数

function validate(dom,reg){
    const value =dom.value;
    const label =dom.nextElementSibling
    if(!value){

        return
    }

    const result = reg.test(value)

    if(result){
        label.innerHTML = '符合规则'
        label.style.color = 'green'
    }else{
        label.innerHTML = '不符合规则'
        label.style.color = 'red'
    }
      
}



// 用户名验证

username()
function username(){
    const text = document.querySelector('input[name=username]')
    text.oninput = function(){
            validate(this,/^\w{6,9}$/)
    }
}

// 密码验证

password()

function password(){

    const password = document.querySelector('input[name=password]')
    const repassword = document.querySelector('input[name=repassword]')
    
    password.oninput = function(){
        
        validate(this,/^\w{6,9}$/)
        repassword.oninput()
    }
}

// 确认密码

repassword()

function repassword(){
    const repassword = document.querySelector('input[name=repassword]')
    repassword.oninput = function(){
        const value = this.value
        if(!value){

            return
        }
        const label = this.nextElementSibling
        const password = document.querySelector('input[name=password]')

        if(value === password.value){
            label.innerHTML = '密码一样'
            label.style.color = 'green'
        }else{
            label.innerHTML = '密码不一样'
            label.style.color = 'red'
        }
    }
    return repassword.oninput
}

// 注册验证

register()

function register(){
    const input = document.querySelector('input[type=submit]')
    input.onclick = function(e){
        const color1 = document.querySelector('input[name=username]').nextElementSibling.style.color
        const color2 = document.querySelector('input[name=password]').nextElementSibling.style.color
        const color3 = document.querySelector('input[name=repassword]').nextElementSibling.style.color
        ;
        if(color1 === 'red' || color2 === 'redd' || color3 === 'red'){
            e.preventDefault()
        }
        const value = document.querySelector('input[name=username]').value
      
        const xhr = new XMLHttpRequest();
        xhr.open('post','http://localhost:5000/find')
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send('name=' + value)

        xhr.onreadystatechange = function(){
           
           
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                   const result = JSON.parse(xhr.responseText)
                  if(result.code === 100){
                    const label = document.querySelector('input[type=text]').nextElementSibling
                    label.innerHTML = result.msg
                    label.style.color = 'red'
                      e.preventDefault()
                  }
                }
            }
        }
    }
   
}