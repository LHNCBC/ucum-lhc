/**
 * This class implements an object containing the vector of exponents for
 * a unit and its operations for addition, subtraction, and multiplication
 * with a scalar.
 *
 *
 * @author Lee Mericle, based on java version by Gunther Schadow
 */
var UC = require('./config.js');
var isInteger = require("is-integer");
export class Dimension {

  /**
   * Constructor.
   *
   * @param dimSetting an optional parameter that may be:
   *  null, which means that this object will be created with a vector
   *   containing all zeroes; or
   *  an array, which must be the length defined by Ucum.dimLen_, and
   *    whose contents will be copied to this new object's vector; or
   *  a number, which must be between 0 and 1 less than the vector length
   *    defined by Ucum.dimLen_.  This new object's vector will be
   *    initialize to zero for all elements except the one whose index
   *    matches the number passed in.  That element will be set to one.

   * @throws an error if the dimSetting parameter does not meet the types
   *  listed above.
   *  An error will also be thrown if Ucum.dimLen_ has not been set yet,
   *  i.e., is still zero.   Currently that won't happen, because the
   *  value is set in the config.js file.  But further down the road
   *  the setting will come from a definitions input file, so we check
   *  here anyway.
   *
   */
  constructor(dimSetting) {

    if (UC.Ucum.dimLen_ === 0) {
      throw('Dimension.setDimensionLen must be called before ' +
      'Dimension constructor');
    }
    if (dimSetting === undefined || dimSetting === null) {
      //this.dimVec_ = new Array(UC.Ucum.dimLen_) ;
      //this.assignZero() ;
      this.dimVec_ = null ;
    }
    else if (dimSetting instanceof Array) {
      if (dimSetting.length !== UC.Ucum.dimLen_) {
        throw('Parameter error, incorrect length of vector passed to ' +
        'Dimension constructor');
      }
      this.dimVec_ = [];
      for (let d = 0; d < UC.Ucum.dimLen_; d++)
        this.dimVec_[d] = dimSetting[d];
    }
    // In es6 this should be Number.isInteger(dimSetting).  But Babel
    // doesn't transpile that correctly, so we need to use the isInteger
    // module.  :0
    else if (isInteger(dimSetting)) {
      if (dimSetting < 0 || dimSetting >= UC.Ucum.dimLen_) {
        throw('Parameter error, invalid element number specified for ' +
        'Dimension constructor');
      }
      this.dimVec_ = new Array(UC.Ucum.dimLen_);
      this.assignZero() ;
      this.dimVec_[dimSetting] = 1;
    }
  } // end constructor


  /**
   * This function sets the number of elements in the dimension vector.
   * It may only be set once, presumably when unit definitions are being
   * loaded in.
   *
   * At the moment this is commented out because we are setting the value in
   * config.js.  In the future this value will come from the definitions file
   * - but we're not there yet.
   *
   * @param the number of dimensions
   * @throws an error if Ucum.dimLen_ has already been set (i.e., is not zero)
   */
  /*
  setDimensionLen(n) {
    if(Ucum.dimLen_ != 0)
      throw new IllegalStateException("setDimensionLen was called more than once");
    Ucum.dimLen_ = n;
  } // end setDimensionLen
  **/


  /**
   * Returns the current setting for Ucum.dimLen_
   *
   * @return the current setting
   * @throws an error if the value has not yet been set
   */
  getDimensionLen() {
    if (UC.Ucum.dimLen_ == 0) {
      throw('Dimension.setDimensionLen must be called before it can be ' +
      'by Dimension.getLen');
    }
    return UC.Ucum.dimLen_;
  }
  

  /**
   * Sets the element at the specified position to 1 if the dimension vector
   * is not null; else nothing is changed.
   *
   * @param indexPos the index of the element to be set
   * @throws an exception if the specified position is invalid, i.e., not a
   *   number or is less than 0 or greater than Ucum.dimLen_
   **/
  setElementAt(indexPos) {

    if (!Number.isInteger(indexPos) ||
        indexPos < 0 || indexPos >= UC.Ucum.dimLen_) {
      throw(`Dimension.setElementAt called with an invalid index ` +
      `position (${indexPos})`);
    }

    if (this.dimVec_)
      this.dimVec_[indexPos] = 1;
  }


  /**
   * Gets the value of the element at the specified position
   *
   * @param indexPos the index of the element whose value is to be returned
   * @return the value of the element at indexPos, or null if the dimension
   *  vector is null
   * @throws an exception if the specified position is invalid, i.e., not a
   *   number or is less than 0 or greater than Ucum.dimLen_
   **/
  getElementAt(indexPos) {
    if (!Number.isInteger(indexPos) ||
        indexPos < 0 || indexPos >= UC.Ucum.dimLen_) {
      throw(`Dimension.getElementAt called with an invalid index ` +
      `position (${indexPos})`);
    }
    let ret = null;
    if (this.dimVec_)
      ret = this.dimVec_[indexPos];
    return ret;
  }


  /**
   * This returns the value of the property named by the parameter
   * passed in.  Although we currently only have one property, dimVec_,
   * that this will get, it's possible that we'll have additional
   * properties.   If we don't this could just be replaced by a
   * getVector function.
   *
   * @param propertyName name of the property to be returned, with
   *        or without the trailing underscore.
   * @return the requested property, if found for this Dimension
   * @throws an error if the property is not found for this Dimension
   */
  getProperty(propertyName) {
    let uProp = (!(propertyName.endsWith('_'))) ? propertyName + '_' :
        propertyName ;
    if (!(this.hasOwnProperty(uProp)))
      throw(`Dimension does not have requested property (${propertyName}`);
    else
      return this[uProp] ;

  } // end getProperty


  /**
   * Return a string that represents the dimension vector.  Returns null if
   * the dimension vector is null.
   *
   * @return the string that represents the dimension vector.  The
   *         values are enclosed in square brackets, each separated
   *         by a comma and a space
   **/
  toString() {
    let ret = null ;
    if (this.dimVec_)
      ret = '[' + this.dimVec_.join(', ') + ']';
    return ret ;
  }


  /**
   * Adds the vector of the dimension object passed in to this
   * dimension object's vector.  This object's vector is changed.
   * If either dimension vector is null, no changes are made to this object.
   *
   *
   * @param dim2 the dimension whose vector is to be added to this one
   * @return this object
   * @throws an exception if dim2 is not a Dimension object
   **/
  add(dim2) {
    if (!dim2 instanceof Dimension) {
      throw(`Dimension.add called with an invalid parameter - ` +
      `${typeof dim2} instead of a Dimension object`);
    }
    if (this.dimVec_ && dim2.dimVec_) {
      for (let i = 0; i < UC.Ucum.dimLen_; i++)
        this.dimVec_[i] += dim2.dimVec_[i];
    }
    return this;
  }


  /**
   * Subtracts the vector of the dimension object passed in to this
   * dimension object's vector.  This object's vector is changed.
   * If either dimension vector is null, no changes are made to this object.
   *
   * @param dim2 the dimension whose vector is to be subtraced from this one
   * @return this object
   * @throws an exception if dim2 is not a Dimension object
   **/
  sub(dim2) {
    if (!dim2 instanceof Dimension) {
      throw(`Dimension.sub called with an invalid parameter - ` +
      `${typeof dim2} instead of a Dimension object`);
    }
    if (this.dimVec_ && dim2.dimVec_) {
      for (let i = 0; i < UC.Ucum.dimLen_; i++)
        this.dimVec_[i] -= dim2.dimVec_[i];
    }
    return this;
  }


  /**
   * Inverts this dimension object's vector (by multiplying each element
   * by negative 1).  This object's vector is changed - unless it is null,
   * in which case it stays that way.
   *
   * @return this object
   **/
  minus() {
    if (this.dimVec_) {
      for (let i = 0; i < UC.Ucum.dimLen_; i++)
        this.dimVec_[i] = -this.dimVec_[i];
    }
    return this;
  }


  /**
   * Multiplies this dimension object's vector with a scalar.  This is used
   * when a unit is raised to a power.  This object's vector is changed unless
   * the vector is null, in which case it stays that way.
   *
   * @param s the scalar to use
   * @return this object
   * @throws an exception if s is not a number
   */
  mul(s) {
    if (!isInteger(s)) {
      throw(`Dimension.sub called with an invalid parameter - ` +
      `${typeof dim2} instead of a number`);
    }
    if (this.dimVec_) {
      for (let i = 0; i < UC.Ucum.dimLen_; i++)
        this.dimVec_[i] *= s;
    }
    return this;
  }


  /**
   * Tests for equality of this dimension object's vector and that of
   * the dimension object passed in.  If the dimension vector for one of
   * the objects is null, the dimension vector for the other object must
   * also be null for the two to be equal.  (I know - duh.  still)
   *
   * @param dim2 the dimension object whose vector is to be compared to this one
   * @return true if the two vectors are equal; false otherwise.
   * @throws an exception if dim2 is not a Dimension object
   */
  equals(dim2) {
    if (!dim2 instanceof Dimension) {
      throw(`Dimension.equals called with an invalid parameter - ` +
      `${typeof dim2} instead of a Dimension object`);
    }
    let isEqual = true ;
    let dimVec2 = dim2.dimVec_;
    if (this.dimVec_ && dimVec2) {
      for (let i = 0; isEqual && i < UC.Ucum.dimLen_; i++)
        isEqual = (this.dimVec_[i] === dimVec2[i]);
    }
    else {
      isEqual = (this.dimVec_ === null && dimVec2 === null);
    }
    return isEqual;
  }


  /**
   * Assigns the contents of the vector belonging to the dimension object
   * passed in to this dimension's vector.  If this dimension vector is null
   * and the other is not, this one will get the contents of the other.  If
   * this dimension vector is not null but the one passed in is null, this
   * one will be set to null.
   *
   * @param dim2 the dimension object with the vector whose contents are
   *  to be assigned to this dimension's vector
   * @return this object (not sure why)
   * @throws an exception if dim2 is not a Dimension object
   */
  assignDim(dim2) {
    if (!dim2 instanceof Dimension) {
      throw(`Dimension.assignDim called with an invalid parameter - ` +
      `${typeof dim2} instead of a Dimension object`);
    }
    let dimVec2 = dim2.dimVec_;
    if (this.dimVec_ === null && dimVec2 !== null) {
      this.dimVec = [] ;
    }

    if (this.dimVec_ && dimVec2) {
      for (let i = 0; i < UC.Ucum.dimLen_; i++)
        this.dimVec_[i] = dimVec2[i];
    }
    else { // dimVec2_ === null, this.dimVec_ may or may not be null
      this.dimVec_ = null ;
    }

    return this;
  }


  /**
   * Sets all elements of this dimension object's vector to zero.
   * If this object's vector is null, it is created as a zero-filled vector.
   *
   * @return this object (not sure why)
   */
  assignZero() {
    if (this.dimVec_ === null)
      this.dimVec_ = [];

    for (let i = 0; i < UC.Ucum.dimLen_; i++) {
      this.dimVec_[i] = 0;
    }
    return this;
  }


  /**
   * Tests for zero dimension.
   *
   * @return true if exponents (elements) of this dimension's vector are all zero;
   * false otherwise.
   *
   */
  isZero() {
    let allZero = this.dimVec_ !== null ;
    if (this.dimVec_) {
      for (let i = 0; allZero && i < UC.Ucum.dimLen_; i++)
        allZero = this.dimVec_[i] === 0;
    }

    return allZero;
  }


  /**
   * Creates and returns a clone of this Dimension object
   *
   * @return the clone
   */
  clone() {
    let that = new Dimension();
    that.assignDim(this);
    return that;
  }

} // end Dimension class
