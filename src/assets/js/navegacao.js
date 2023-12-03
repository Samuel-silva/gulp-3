(function () {
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indentx
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }]
  ];

  const quill = new Quill('#quill-editor', {
    modules: {
      toolbar: toolbarOptions
    },
    theme: 'snow'
  });

  const api = [
    {
      "insert": "\nteste"
    },
    {
      "attributes": {
        "list": "ordered"
      },
      "insert": "\n"
    },
    {
      "insert": "teste"
    },
    {
      "attributes": {
        "list": "ordered"
      },
      "insert": "\n"
    },
    {
      "insert": "teste"
    },
    {
      "attributes": {
        "list": "ordered"
      },
      "insert": "\n"
    },
    {
      "insert": "teste"
    },
    {
      "attributes": {
        "list": "ordered"
      },
      "insert": "\n"
    },
    {
      "insert": "teste"
    },
    {
      "attributes": {
        "list": "ordered"
      },
      "insert": "\n"
    }
  ]

  quill.setContents(api)

  $("#salvarQuill").on("click", function () {
    const contents = quill.getContents({index: 0});
    const html = JSON.stringify(contents, null, 2);
    $('#codeQuill').text(html)
  })
}) ()