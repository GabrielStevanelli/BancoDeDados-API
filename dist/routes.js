"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var RecadosController_1 = require("./app/Controllers/RecadosController");
var router = express_1.Router();
router.get('/listar', RecadosController_1.getRecados);
router.post('/adicionar', RecadosController_1.postRecados);
router.put('/mudar/:id', RecadosController_1.putRecados);
router.delete('/apaga/:id', RecadosController_1.deleteRecados);
exports.default = router;
//# sourceMappingURL=routes.js.map