// в пре-реквестах
let tenantIds = ['tenant1', 'tenant2', 'tenant3']; // список айдишек
let envs = ["waaatop1.com", "luckystar.com"]
pm.environment.set("tenantIds", JSON.stringify(tenantIds));
pm.environment.set("currentIndex", 0); // старт с нулевого индекса

// пререквест скрипты
let currentIndex = pm.environment.get("currentIndex");
let tenantIds = JSON.parse(pm.environment.get("tenantIds"));
let currentTenantId = tenantIds[currentIndex];

// пушим в хедер реквеста
pm.request.headers.add({key: 'tenant-id', value: currentTenantId});

// тапка тестов
let currentIndex = pm.environment.get("currentIndex");
let tenantIds = JSON.parse(pm.environment.get("tenantIds"));

if (currentIndex < tenantIds.length - 1) {
    pm.environment.set("currentIndex", currentIndex + 1); // инкремент индекса
    postman.setNextRequest(pm.info.requestName); // ре-ранит этот же реквест
} else {
    pm.environment.unset("currentIndex"); // очищает индекс когда завершился прогон
    pm.environment.unset("tenantIds"); // очищает тенанты после прогона
}


/*
объява массива, в пререквест скриптах, сетаем массив тенантов и храним в переменных, также индекс, чтобы понимать какой тенант юзать
сетаем хедер в пре-реквестах получаем текущий тенант с помощью индекса
инкрементим индекс в тест тапках после отправки реквеста, postman.setNextRequest() чек на наличие
 */