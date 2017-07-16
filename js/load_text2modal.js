

// loadText = function() {
//     return $.ajax({
//         url: 'about_me.txt',
//         dataType: 'text',
//         success: function(text) {
//             loadText.logContents = text;
//             $("#insertext").text(text);
//         }
//     })
// };

$('#aboutme').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var file_contents = button.data('filecontents') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
      modal.find('.modal-body article').html(file_contents)
})