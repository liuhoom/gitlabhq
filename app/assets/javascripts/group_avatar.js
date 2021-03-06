(function() {
  this.GroupAvatar = (function() {
    function GroupAvatar() {
      $('.js-choose-group-avatar-button').bind("click", function() {
        var form;
        form = $(this).closest("form");
        return form.find(".js-group-avatar-input").click();
      });
      $('.js-group-avatar-input').bind("change", function() {
        var filename, form;
        form = $(this).closest("form");
        filename = $(this).val().replace(/^.*[\\\/]/, '');
        return form.find(".js-avatar-filename").text(filename);
      });
    }

    return GroupAvatar;

  })();

}).call(this);
