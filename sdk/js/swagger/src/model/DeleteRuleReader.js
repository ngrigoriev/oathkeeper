/**
 * ORY Oathkeeper
 * ORY Oathkeeper is a reverse proxy that checks the HTTP Authorization for validity against a set of rules. This service uses Hydra to validate access tokens and policies.
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OryOathkeeper) {
      root.OryOathkeeper = {};
    }
    root.OryOathkeeper.DeleteRuleReader = factory(root.OryOathkeeper.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeleteRuleReader model module.
   * @module model/DeleteRuleReader
   * @version Latest
   */

  /**
   * Constructs a new <code>DeleteRuleReader</code>.
   * @alias module:model/DeleteRuleReader
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>DeleteRuleReader</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeleteRuleReader} obj Optional instance to populate.
   * @return {module:model/DeleteRuleReader} The populated <code>DeleteRuleReader</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

    }
    return obj;
  }




  return exports;
}));


