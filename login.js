var idPass = false;

$('#id').on('keyup', function () {
  // 아이디 입력란에 입력된 값 : $(this).val() == this.value
  let idValue = $(this).val();
  if (idValue.length == 0) {
    $('#msg_id').text('');
  } else if (idValue.length < 4) {
    $('#msg_id')
      .text('아이디는 4자 이상 입니다.')
      .css('color', '#FF0000')
      .css('font-size', '14px');
  } else {
    $('#msg_id')
      .text('정상적인 아이디입니다.')
      .css('color', '#0000FF')
      .css('font-size', '14px');
  }
  idPass = idValue.length >= 4;
});
$('#frm_login').on('submit', function (event) {
  if (idPass == false) {
    alert('아이디를 확인하세요.');
    event.preventDefault();
    return;
  }
  if ($('#pw').val() == '') {
    alert('비밀번호를 입력하세요.');
    event.preventDefault();
    return;
  }
});
