$(function(){
// _____________________ project page JS
    let mode = 1;
    let air = "This was a big team project. Me and my group created a fictional company and created a site that advertised products and accepted orders."
    let pokemon = "This project utilized JSON and we used it to pull information from the official Pokemon API."
    let game = "Me and my group made a mario party style version of tic-tac-toe, where each win in a large square meant the two players had to compete in a minigame before they could continue."
    let citadel = "This game was made in Godot. A teammate did the coding, while I helped with art, designing the final boss and a few small enemies and buildings."
    var captions = [air, pokemon, game, citadel]
    //toggles the dark mode class and changes the text

    //This ensures the images are not visible to the user until they are revealed.
    $(".analyzed").toggle()

    // This function identifies which thumbnail was pushed, then increases the width of the corresponding gallery image
    let temp = 0
    $(".thumbnail").on('click', function(){
        $('.number'+temp).toggle()
        let analyzingID = $(this).attr('thumbnailID');
        $('.number'+analyzingID).fadeIn(1000)
        temp = analyzingID
        $('.captions').html(captions[temp-1])
    })

    //keyboard navigation
    $("body").keydown(function(event){
        if(event.key === 'ArrowRight'){
            $('.number'+temp).toggle()
            if(temp == '6'){
                temp = 1
            }else{
                temp++
            }
            $('.number'+temp).fadeIn(1000)
        }else if(event.key === 'ArrowLeft'){
            $('.number'+temp).toggle()
            // The zero is to allow the slides to change without the thumbnail being pressed first
            if(temp == '1' || temp == '0'){
                temp = 6
            }else{
                temp--
            }
            $('.number'+temp).fadeIn(1000)
        }
    })
    $(".thumbnail").on('hover', function(){
        $(this).toggleClass('selected')
    })

    //Have it call captions[temp] whenever the image is changed to edit the html of the captions div



    //________________________

    //_______________"Email code"
    $("#result-box").hide()
    $("#submit-button").on('click', function(){
        let email = ""
        let name = ""
        let subject = ""
        let content = ""
        email = $("#email").val()
        $("#email").val("")
        name = $("#name").val()
        $("#name").val("")
        subject = $("#subject").val()
        $("#subject").val("")
        content = $("#content").val()
        $("#content").val("")


        $("#email-sum").text(email)
        $("#name-sum").text(name)
        $("#subject-sum").text(subject)
        $("#content-sum").text(content)
        $("#result-box").show()
    })


    //_______________
})