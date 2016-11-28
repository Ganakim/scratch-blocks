/**
 * AccessibleBlockly
 *
 * Copyright 2016 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Angular2 Service for the block options modal.
 *
 * @author sll@google.com (Sean Lip)
 */

blocklyApp.BlockOptionsModalService = ng.core.Class({
  constructor: [function() {
    this.actionButtonsInfo = [];
    this.preShowHook = function() {
      throw Error(
          'A pre-show hook must be defined for the block options modal ' +
          'before it can be shown.');
    };
    this.modalIsShown = false;
    this.onCancelCallback = null;
  }],
  registerPreShowHook: function(preShowHook) {
    this.preShowHook = function() {
      preShowHook(this.actionButtonsInfo, this.onCancelCallback);
    };
  },
  isModalShown: function() {
    return this.modalIsShown;
  },
  showModal: function(actionButtonsInfo, onCancelCallback) {
    this.actionButtonsInfo = actionButtonsInfo;
    this.onCancelCallback = onCancelCallback;

    this.preShowHook();
    this.modalIsShown = true;
  },
  hideModal: function() {
    this.modalIsShown = false;
  }
});
