const {exec} = require("child_process");

const runTask = (req, res) => {
    exec('schtasks /run /tn "\\mistareas\\tarea01"', (error, stdout, stderr) => {
      if(error) {
        console.error('error: ' + error.message);
        res.status(500).json({result: error.message});
      };
      if(stdout) res.status(200).json({result: stdout});
      if(stderr) res.status(500).json({result: stderr});
    });
}

module.exports = {
    runTask,
}