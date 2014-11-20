/*
* JSONLoader
* Visit http://createjs.com/ for documentation, updates and examples.
*
*
* Copyright (c) 2012 gskinner.com, inc.
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/

// namespace:
this.createjs = this.createjs||{};

(function () {
	"use strict";

	/**
	* The JSONLoader class description goes here.
	*
	 * @constructor
	*/
	function JSONLoader(loadItem) {
		this.AbstractLoader_constructor();
		this._init(loadItem, true, createjs.DataTypes.JSON);

		// public properties

		// protected properties
		this.resultFormatter = this._formatResult;
	};

	var p = createjs.extend(JSONLoader, createjs.AbstractLoader);
	var s = JSONLoader;

	// static properties

	// public methods

	// protected methods
	p._formatResult = function(loader) {
		var json = null;
		try {
			json = createjs.DataUtils.parseJSON(loader.getResult(true));
		} catch (e) {
			var event = new createjs.Event("error");
			event.error = e;

			this._sendError(event);
			return e;
		}

		return json;
	};

	createjs.JSONLoader = createjs.promote(JSONLoader, "AbstractLoader");

}());
