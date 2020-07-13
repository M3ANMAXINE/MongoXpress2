const lista_usuarios = function(tasks,key){
    return tasks.sort(function(a,b){
        var x = a[key].toLowerCase();
        var y = b[key].toLowerCase();
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

function remplazar (tasks){
    var enes = tasks.replace(/ñ/i, "nn")
    return enes;
}