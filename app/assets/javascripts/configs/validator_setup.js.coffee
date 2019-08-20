jQuery.validator.setDefaults
  errorPlacement: (error, element) ->
    if element.hasClass('date-picker-display')
      error.insertAfter element.parent("div")
    else if element.hasClass('select2-hide')
      error.insertAfter element.siblings("span.select2.select2-container")
    else
      error.insertAfter element
