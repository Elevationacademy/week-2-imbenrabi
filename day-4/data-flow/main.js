const posts = [{name: 'ben', text: 'where is your leash?'}, {name: 'ela', text: 'do me right'}];

const render = () => {
    for (let post of posts) {
        $('#name').val('');
        $('#text').val('');
        $('#main').append($(`<div class="post"> ${post.name}: ${post.text} </div>`))
    } 
}

$('button').click(function() {
    const post = { name: $('#name').val(), text: $('#text').val() }
    
    
    posts.push(post);
    $('#main').empty();
    render();
})

render();