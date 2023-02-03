// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract Honestfil {
    // Estructura para almacenar información de un protocolo
    struct Protocol {
        string name;
        string category;
        string urllogo;
        address addressVault;
        string urlWebsite;
        address owner;
        uint id;
    }

    // Mapa para almacenar todos los protocolos registrados
    mapping(uint => Protocol) public protocols;
    uint public protocolCount;

    // Evento para registrar la creación de un nuevo protocolo
    event NewProtocol(uint id, string name, address owner);

    // Método para registrar un nuevo protocolo
    function registerProtocol(
        string memory _name,
        string memory _category,
        string memory _urllogo,
        address _addressVault,
        string memory _urlWebsite
    ) public {
        // Asignar un ID único al protocolo
        protocolCount++;
        uint id = protocolCount;

        // Asignar información al protocolo y agregarlo al mapa
        protocols[id] = Protocol(
            _name,
            _category,
            _urllogo,
            _addressVault,
            _urlWebsite,
            msg.sender,
            id
        );

        // Emitir evento para registrar la creación del nuevo protocolo
        emit NewProtocol(id, _name, msg.sender);
    }

    // Método para obtener la lista de todos los protocolos registrados
    function getProtocols() public view returns (Protocol[] memory) {
        Protocol[] memory result = new Protocol[](protocolCount);
        for (uint i = 1; i <= protocolCount; i++) {
            result[i - 1] = protocols[i];
        }
        return result;
    }

    struct Alert {
        string protocolName;
        uint minReserve;
        address owner;
        bool isActive;
        bool isFavorite;
        uint id;

    }

    mapping(uint => Alert) public alerts;
    uint public alertCount;

     // Método para obtener la lista de todos los alerts registrados
    function getAlerts() public view returns (Alert[] memory) {
        Alert[] memory result = new Alert[](alertCount);
        for (uint i = 1; i <= alertCount; i++) {
            result[i - 1] = alerts[i];
        }
        return result;
    }

    event AlertCreated(
        uint id,
        string protocolName,
        uint minReserve,
        address owner
    );

    function createAlert(string memory _protocolName, uint _minReserve) public {
        // Asignar un ID único a la alerta
        alertCount = alertCount + 1;
        uint id = alertCount;

        // Asignar información a la alerta y agregarla al mapa
        alerts[id] = Alert(_protocolName, _minReserve, msg.sender, true, false, id);
        emit AlertCreated(id, _protocolName, _minReserve, msg.sender);
    }

    event AlertEdited(uint id, uint minReserve);

    function editAlert(uint _alertId, uint _minReserve) public {
        // Verificar que el propietario de la alerta sea quien intenta editarla
        require(
            alerts[_alertId].owner == msg.sender,
            "Solo el propietario puede editar la alerta"
        );

        // Actualizar el monto de reserva mínima
        alerts[_alertId].minReserve = _minReserve;

        // Desencadenar evento
        emit AlertEdited(_alertId, _minReserve);
    }

    event AlertPaused(uint id);

    function pauseAlert(uint _alertId) public {
        // Verificar que el propietario de la alerta sea quien intenta ponerla en pausa
        require(
            alerts[_alertId].owner == msg.sender,
            "Solo el propietario puede poner la alerta en pausa"
        );

        // Poner la alerta en pausa
        alerts[_alertId].isActive = false;

        // Desencadenar evento
        emit AlertPaused(_alertId);
    }

      event IsFavorite(uint id);

    function isFavorite(uint _alertId) public {
        // Verificar que el propietario de la alerta sea quien intenta ponerla en pausa
        /*require(
            alerts[_alertId].owner == msg.sender,
            "Solo el propietario puede poner la alerta en favorito"
        );
*/
        // Poner la alerta en pausa
        alerts[_alertId].isFavorite = !alerts[_alertId].isFavorite;

        // Desencadenar evento
        emit IsFavorite(_alertId);
    }

    event AlertDeleted(uint id);

    function deleteAlert(uint _alertId) public {
        // Verificar que el propietario de la alerta sea quien intenta eliminarla
        require(
            alerts[_alertId].owner == msg.sender,
            "Solo el propietario puede eliminar la alerta"
        );

        // Eliminar la alerta
        delete alerts[_alertId];

        // Desencadenar evento
        emit AlertDeleted(_alertId);
    }
}
