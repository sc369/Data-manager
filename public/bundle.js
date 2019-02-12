(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const createEmployeeHTML = employee => {
  const output = document.querySelector("#container");
  output.innerHTML += `<h3>${employee.first_name} ${employee.last_name}</h3>`;
  output.innerHTML += `<p>Department: ${employee.department.name}</p>`;
  output.innerHTML += `<p>Computer: ${employee.computer.make} ${employee.computer.model}`;
};

var _default = createEmployeeHTML;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createHTML = _interopRequireDefault(require("./createHTML.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getContacts = () => {
  return fetch("http://127.0.0.1:8088/employees?_expand=department&&_expand=computer").then(res => res.json()).then(employees => {
    employees.forEach(employee => {
      (0, _createHTML.default)(employee);
    });
  });
};

var _default = getContacts;
exports.default = _default;

},{"./createHTML.js":1}],3:[function(require,module,exports){
"use strict";

var _dataManager = _interopRequireDefault(require("./dataManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _dataManager.default)();

},{"./dataManager":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NyZWF0ZUhUTUwuanMiLCIuLi9zY3JpcHRzL2RhdGFNYW5hZ2VyLmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBLE1BQU0sa0JBQWtCLEdBQUksUUFBRCxJQUFjO0FBQ3ZDLFFBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFlBQXZCLENBQWY7QUFDQSxFQUFBLE1BQU0sQ0FBQyxTQUFQLElBQXFCLE9BQU0sUUFBUSxDQUFDLFVBQVcsSUFBRyxRQUFRLENBQUMsU0FBVSxPQUFyRTtBQUNBLEVBQUEsTUFBTSxDQUFDLFNBQVAsSUFBcUIsa0JBQWlCLFFBQVEsQ0FBQyxVQUFULENBQW9CLElBQUssTUFBL0Q7QUFDQSxFQUFBLE1BQU0sQ0FBQyxTQUFQLElBQXFCLGdCQUFlLFFBQVEsQ0FBQyxRQUFULENBQWtCLElBQUssSUFBRyxRQUFRLENBQUMsUUFBVCxDQUFrQixLQUFNLEVBQXRGO0FBQ0QsQ0FMRDs7ZUFPZSxrQjs7Ozs7Ozs7Ozs7QUNQZjs7OztBQUVBLE1BQU0sV0FBVyxHQUFHLE1BQU07QUFDeEIsU0FBTyxLQUFLLENBQUMsc0VBQUQsQ0FBTCxDQUNKLElBREksQ0FDQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUosRUFEUixFQUVKLElBRkksQ0FFQyxTQUFTLElBQUk7QUFDakIsSUFBQSxTQUFTLENBQUMsT0FBVixDQUFrQixRQUFRLElBQUk7QUFDNUIsK0JBQW1CLFFBQW5CO0FBQ0QsS0FGRDtBQUdELEdBTkksQ0FBUDtBQU9ELENBUkQ7O2VBVWUsVzs7Ozs7O0FDWmY7Ozs7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGNyZWF0ZUVtcGxveWVlSFRNTCA9IChlbXBsb3llZSkgPT4ge1xyXG4gIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyXCIpXHJcbiAgb3V0cHV0LmlubmVySFRNTCArPSBgPGgzPiR7ZW1wbG95ZWUuZmlyc3RfbmFtZX0gJHtlbXBsb3llZS5sYXN0X25hbWV9PC9oMz5gXHJcbiAgb3V0cHV0LmlubmVySFRNTCArPSBgPHA+RGVwYXJ0bWVudDogJHtlbXBsb3llZS5kZXBhcnRtZW50Lm5hbWV9PC9wPmBcclxuICBvdXRwdXQuaW5uZXJIVE1MICs9IGA8cD5Db21wdXRlcjogJHtlbXBsb3llZS5jb21wdXRlci5tYWtlfSAke2VtcGxveWVlLmNvbXB1dGVyLm1vZGVsfWBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRW1wbG95ZWVIVE1MIiwiaW1wb3J0IGNyZWF0ZUVtcGxveWVlSFRNTCBmcm9tIFwiLi9jcmVhdGVIVE1MLmpzXCJcclxuXHJcbmNvbnN0IGdldENvbnRhY3RzID0gKCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcImh0dHA6Ly8xMjcuMC4wLjE6ODA4OC9lbXBsb3llZXM/X2V4cGFuZD1kZXBhcnRtZW50JiZfZXhwYW5kPWNvbXB1dGVyXCIpXHJcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKGVtcGxveWVlcyA9PiB7XHJcbiAgICAgIGVtcGxveWVlcy5mb3JFYWNoKGVtcGxveWVlID0+IHtcclxuICAgICAgICBjcmVhdGVFbXBsb3llZUhUTUwoZW1wbG95ZWUpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRDb250YWN0cyIsImltcG9ydCBnZXRDb250YWN0cyBmcm9tIFwiLi9kYXRhTWFuYWdlclwiXHJcbmdldENvbnRhY3RzKCkiXX0=
