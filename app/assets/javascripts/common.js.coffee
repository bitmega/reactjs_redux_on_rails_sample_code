@i18ntranslate = (key, options = {}) ->
  I18n.t @rootI18n + ".#{key}", options

@warning = (msg) ->
  msg = msg || I18n.t("messages.common_error")
  if (Array.isArray(msg))
    _.each(msg, (m) ->
      $.iaoAlert(
        msg: m
        type: "warning"
        mode: "dark"
      )
    )
  else
    $.iaoAlert(
      msg: msg
      type: "warning"
      mode: "dark"
    )

@notice = (msg) ->
  return unless msg

  if (Array.isArray(msg))
    _.each(msg, (m) ->
      $.iaoAlert(
        msg: m
        type: "success"
        mode: "dark"
      )
    )
  else
    $.iaoAlert(
      msg: msg
      type: "success"
      mode: "dark"
    )


@errorHandling = (error)->
  console.log(error)
  warning()