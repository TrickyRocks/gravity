/*
	Copyright 2013-2014 Paul Liverman III

	This file is part of Jenjens.

	Jenjens is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	Jenjens is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with Jenjens.  If not, see <http://www.gnu.org/licenses/>.
*/
string={
	pad:	function(str,len,character,rightPad){
		if (character==undefined) character='0';
		if (len==undefined) throw "string.pad(str,len) len undefined, check your arguments";
		while (str.length<len){rightPad ? str+=character : str=character+str;}
		return str;
	}
};

function forEach(array,action){
	for (var i=0;i<array.length;i++)
		action(array[i]);}

function forEachCompare(array,action){
	for (var i=0;i<array.length-1;i++)
		for (var j=i+1;j<array.length;j++)
			action(array[i],array[j]);}
