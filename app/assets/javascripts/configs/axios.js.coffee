axios.defaults.headers.common["Accept"] = "application/json"
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

$ ->
  axios.defaults.headers.common['X-CSRF-Token'] = $("meta[name='csrf-token']").attr("content")