    const form = document.querySelector('.form')
    const DB__LOGIN = document.querySelector('.login')
    const DB__PASSWORD = document.querySelector('.password')
    const result = document.querySelector('.result')

    form.addEventListener('submit', function(event) {
        event.preventDefault()


        const userName = DB__LOGIN.value
        const pass = DB__PASSWORD.value

        result.innerHTML = `
        <p> Логин: ${userName}/p>
        <p> Пароль ${pass}</p>
        `

        console.log(userName + " " + pass)

        DB__LOGIN.value = ''
        DB__PASSWORD.value = ''


        form.style.border = '2px solid #0000'
    })

