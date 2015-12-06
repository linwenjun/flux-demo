module.exports = function(tasks) {
  tasks.forEach(function(task) {
    require('./tasks/' + task);
  });
}
