fs = require 'fs'


config = this

extend = (obj, other) ->
  for key, val of other
    obj[key] = val

@load = (paths, callback) ->
  appendFile = ([x, xs...]) ->
    return callback() unless x?
    fs.readFileSync x, 'UTF-8', (err, data) ->
      if err?
        callback err
      else
        try
          extend config, JSON.parse data
        catch e
          return callback e
        appendFile xs

  appendFile paths
