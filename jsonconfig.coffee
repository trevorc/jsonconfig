fs = require 'fs'


config = this

extend = (obj, other) ->
  for key, val of other
    obj[key] = val

@load = (paths..., callback) ->
  if callback and paths.length == 0
    [paths, callback] = [[callback], ->]

  appendFile = ([x, xs...]) ->
    return callback null, config unless x?
    fs.readFile x, 'UTF-8', (err, data) ->
      if err?
        callback err
      else
        try
          extend config, JSON.parse data
        catch e
          return callback e
        appendFile xs

  appendFile paths
