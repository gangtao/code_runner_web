$(function() {
  console.log("ui is ready!");

  var code_data = {
    "language": "python",
    "files": [
      { "name": "main.py", "content": "print(42)" }
    ]
  };

  var editor = CodeMirror.fromTextArea(document.getElementById("code-input"), {
    lineNumbers: true,
    indentUnit: 4,
    mode: "python",
    theme: "icecoder"
  });

  editor.setValue(code_data.files[0].content);

  function run_code() {
    code_data.files[0].content = editor.getValue();
    $.ajax({
      type: "POST",
      url: "/run",
      data: JSON.stringify(code_data),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function(data) {
        console.log(data);
        if (data.stderr.length != 0) {
          $("#code-output").text(data.stderr);
        } else {
          $("#code-output").text(data.stdout);
        }
      },
      failure: function(errMsg) {
        console.log(errMsg);
        $("#code-output").text(errMsg);
      }
    });
  }

  $("#code-run").click(function() {
    console.log("click to run the code!");
    run_code();
  });

  $("body").keydown(function(event) {
    if (event.ctrlKey && event.keyCode == 13) {
      // Ctrl-Enter pressed
      console.log("contrl+entrt to run the code!");
      run_code();
    }
  });

});
