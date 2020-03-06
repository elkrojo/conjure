// Images for rotation
var bgImages = ['hifi_01.jpeg', 'ttable_bw_01.jpg', 'ttable_bw_green_01.jpeg', 'ttable_bw_red_01.jpeg',
                'vinyl_grooves_01.jpg', 'vinyl_stack_01.jpeg', 'vinyl_stack_02.jpg']

// var bgRandNum = Math.floor((Math.random() * bgImages.length));

var d = new Date();
var t = d.getTime();
var days = Math.floor(t / (1000 * 60 * 60 * 24));

// Select image per day
var rotator = days % bgImages.length;
var bgImage = 'url(static/images/background/' + bgImages[rotator] + ')';


// Page load functions
$(document).ready(function() {
    // $('body').css({'background-image': bgImage});

    $('#add_genre_name, #edit_genre_name, #set_genre_name').change(function() {
        var val = $(this).val();
        if (val == "rock") {
            $('#add_genre_style, #edit_genre_style, #set_genre_style').html(` <option value="">-- select one --</option>
                                                            <option value='pop rock'>Pop Rock</option>
                                                            <option value='alternative rock'>Alternative Rock</option>
                                                            <option value='indie rock'>Indie Rock</option>
                                                            <option value='punk'>Punk</option>
                                                            <option value='classic rock'>Classic Rock</option>
                                                            <option value='hard rock'>Hard Rock</option>
                                                            <option value='rock & roll'>Rock & Roll</option>
                                                            <option value='folk rock'>Folk Rock</option>
                                                            <option value='psychedelic rock'>Psychedelic Rock</option>
                                                            <option value='prog rock'>Prog Rock</option>`);
        }
        else if (val == "electronic") {
            $('#add_genre_style, #edit_genre_style, #set_genre_style').html(` <option value="">-- select one --</option>
                                                            <option value='house'>House</option>
                                                            <option value='synth-pop'>Synth-Pop</option>
                                                            <option value='techno'>Techno</option>
                                                            <option value='disco'>Disco</option>
                                                            <option value='electro'>Electro</option>
                                                            <option value='italo-disco'>Italo-Disco</option>
                                                            <option value='experimental'>Experimental</option>
                                                            <option value='ambient'>Ambient</option>
                                                            <option value='acid'>Acid</option>
                                                            <option value='deep house'>Deep House</option>`);
        }
        else if (val == "pop") {
            $('#add_genre_style, #edit_genre_style, #set_genre_style').html(` <option value="">-- select one --</option>
                                                            <option value='pop rock'>Pop Rock</option>
                                                            <option value='vocal'>Vocal</option>
                                                            <option value='ballad'>Ballad</option>
                                                            <option value='synth-pop'>Synth-Pop</option>
                                                            <option value='chanson'>Chanson</option>
                                                            <option value='schlager'>Schlager</option>
                                                            <option value='disco'>Disco</option>
                                                            <option value='europop'>Europop</option>
                                                            <option value='soft rock'>Soft Rock</option>
                                                            <option value='easy listening'>Easy Listening</option>`);
        }
        else if (val == "funk / soul") {
            $('#add_genre_style, #edit_genre_style, #set_genre_style').html(` <option value="">-- select one --</option>
                                                            <option value='soul'>Soul</option>
                                                            <option value='disco'>Disco</option>
                                                            <option value='funk'>Funk</option>
                                                            <option value='rhythm & blues'>Rhythm & Blues</option>
                                                            <option value='pop rock'>Pop Rock</option>
                                                            <option value='synth-pop'>Synth Pop</option>
                                                            <option value='jazz-funk'>Jazz-Funk</option>
                                                            <option value='rnb / swing'>RnB / Swing</option>
                                                            <option value='ballad'>Ballad</option>
                                                            <option value='vocal'>Vocal</option>`);
        }
        else if (val == "jazz") {
            $('#add_genre_style, #edit_genre_style, #set_genre_style').html(` <option value="">-- select one --</option>
                                                            <option value='easy listening'>Easy Listening</option>
                                                            <option value='contemporary jazz'>Contemporary Jazz</option>
                                                            <option value='big band'>Big Band</option>
                                                            <option value='swing'>Swing</option>
                                                            <option value='jazz-funk'>Jazz-Funk</option>
                                                            <option value='fusion'>Fusion</option>
                                                            <option value='soul jazz'>Soul-Jazz</option>
                                                            <option value='vocal'>Vocal</option>
                                                            <option value='jazz rock'>Jazz-Rock</option>
                                                            <option value='bop'>Bop</option>`);
        }
        else if (val == "folk, world & country") {
            $('#add_genre_style, #edit_genre_style, #set_genre_style').html(` <option value="">-- select one --</option>
                                                            <option value='country'>Country</option>
                                                            <option value='folk'>Folk</option>
                                                            <option value='folk rock'>Folk Rock</option>
                                                            <option value='vocal'>Vocal</option>
                                                            <option value='country rock'>Country Rock</option>
                                                            <option value='african'>African</option>
                                                            <option value='pop rock'>Pop Rock</option>
                                                            <option value='ballad'>Ballad</option>
                                                            <option value='acoustic'>Acoustic</option>
                                                            <option value='laiko'>Laiko</option>`);
        }
        else if (val == "hip hop") {
            $('#add_genre_style, #edit_genre_style, #set_genre_style').html(` <option value="">-- select one --</option>
                                                            <option value='rnb / swing'>RnB / Swing</option>
                                                            <option value='pop rap'>Pop Rap</option>
                                                            <option value='house'>House</option>
                                                            <option value='gangsta'>Gangsta</option>
                                                            <option value='electro'>Electro</option>
                                                            <option value='conscious'>Conscious</option>
                                                            <option value='hip hop'>Hip Hop</option>
                                                            <option value='downtempo'>Downtempo</option>
                                                            <option value='soul'>Soul</option>
                                                            <option value='synth-pop'>Synth-Pop</option>`);
        }
        else if (val == "classical") {
            $('#add_genre_style, #edit_genre_style, #set_genre_style').html(` <option value="">-- select one --</option>
                                                            <option value='romantic'>Romantic</option>
                                                            <option value='classical'>Classical</option>
                                                            <option value='baroque'>Baroque</option>
                                                            <option value='modern'>Modern</option>
                                                            <option value='contemporary'>Contemporary</option>
                                                            <option value='opera'>Opera</option>
                                                            <option value='soundtrack'>Soundtrack</option>
                                                            <option value='easy listening'>Easy Listening</option>
                                                            <option value='neo-classical'>Neo-Classical</option>
                                                            <option value='modern classical'>Modern Classical</option>`);
        }
        else if (val == "stage & screen") {
            $('#add_genre_style, #edit_genre_style, #set_genre_style').html(` <option value="">-- select one --</option>
                                                            <option value='soundtrack'>Soundtrack</option>
                                                            <option value='score'>Score</option>
                                                            <option value='theme'>Theme</option>
                                                            <option value='musical'>Musical</option>
                                                            <option value='pop rock'>Pop Rock</option>
                                                            <option value='easy listening'>Easy Listening</option>
                                                            <option value='vocal'>Vocal</option>
                                                            <option value='synth-pop'>Synth-Pop</option>
                                                            <option value='ballad'>Ballad</option>
                                                            <option value='disco'>Disco</option>`);
        }
        else if (val == "reggae") {
            $('#add_genre_style, #edit_genre_style, #set_genre_style').html(` <option value="">-- select one --</option>
                                                            <option value='dancehall'>Dancehall</option>
                                                            <option value='reggae'>Reggae</option>
                                                            <option value='dub'>Dub</option>
                                                            <option value='roots reggae'>Roots Reggae</option>
                                                            <option value='reggae pop'>Reggae-Pop</option>
                                                            <option value='ska'>Ska</option>
                                                            <option value='lovers rock'>Lovers Rock</option>
                                                            <option value='rocksteady'>Rocksteady</option>
                                                            <option value='ragga'>Ragga</option>
                                                            <option value='calypso'>Calypso</option>`);
        }
        else if (val == "latin") {
            $('#add_genre_style, #edit_genre_style, #set_genre_style').html(` <option value="">-- select one --</option>
                                                            <option value='salsa'>Salsa</option>
                                                            <option value='mpb'>MPB</option>
                                                            <option value='samba'>Samba</option>
                                                            <option value='latin jazz'>Latin Jazz</option>
                                                            <option value='ballad'>Ballad</option>
                                                            <option value='easy listening'>Easy Listening</option>
                                                            <option value='bolero'>Bolero</option>
                                                            <option value='flamenco'>Flamenco</option>
                                                            <option value='bossanova'>Bossanova</option>
                                                            <option value='vocal'>Vocal</option>`);
        }
        else if (val == "blues") {
            $('#add_genre_style, #edit_genre_style, #set_genre_style').html(` <option value="">-- select one --</option>
                                                            <option value='blues rock'>Blues Rock</option>
                                                            <option value='rhythm & blues'>Rhythm & Blues</option>
                                                            <option value='rock & roll'>Rock & Roll</option>
                                                            <option value='electric blues'>Electric Blues</option>
                                                            <option value='soul'>Soul</option>
                                                            <option value='country blues'>Country Blues</option>
                                                            <option value='chicago blues'>Chicago Blues</option>
                                                            <option value='pop rock'>Pop Rock</option>
                                                            <option value='classic_rock'>Classic Rock</option>
                                                            <option value='psychedelic rock'>Psychedelic Rock</option>`);
        }
    });
})

