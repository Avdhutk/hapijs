const getReport = {
  handler: (req, res) => {
    const resp = {
      count: 100
    }
    return {count: 100}
  }
}

exports.routes = [{
  method: 'GET',
  path: '/report',
  config: getReport
}]
