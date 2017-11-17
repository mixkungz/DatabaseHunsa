import AdminLayout from '../../components/adminlayout'
import Portlet from '../../components/portlet'
import styled , { injectGlobal } from 'styled-components'
import Link from 'next/link'

injectGlobal`
    .col-form-label{
        font-size:1em !important;
    }
`

const ProductManagement = () => (
    <div>
        <AdminLayout>
            <div className="row">
                <div className="col-12">
                    <Portlet>
                        <form>
                            <div className="form-group row">
                                <label for="staticEmail" className="col-sm-2 col-form-label text-right mr-3">ชื่อสินค้า</label>
                                <div className="col-sm-9">
                                <input type="text" className="form-control" id="staticEmail" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="inputPassword" className="col-sm-2 col-form-label text-right mr-3">หมวดหมู่</label>
                                <div className="col-sm-9">
                                    <select className="form-control" id="exampleFormControlSelect1" data-init-plugin="select2">
                                        <option>face</option>
                                        <option>lip</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="staticEmail" className="col-sm-2 col-form-label text-right mr-3">URL</label>
                                <div className="col-sm-9 input-group">
                                    <div class="input-group-addon">http://localhost:3000/</div>
                                    <input type="text" class="form-control" id="inlineFormInputGroupUsername2" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="staticEmail" className="col-sm-2 col-form-label text-right mr-3">รายละเอียดสินค้า</label>
                                <div className="col-sm-9">
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="staticEmail" className="col-sm-2 col-form-label text-right mr-3">รูปสินค้าหลัก</label>
                                <div className="col-sm-9">
                                    <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                                </div>
                                <label for="staticEmail" className="col-sm-2 col-form-label text-right mr-3">รูปสินค้า(เพิ่มเติม)</label>
                                <div className="col-sm-9">
                                    <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                                </div>
                                <label for="staticEmail" className="col-sm-2 col-form-label text-right mr-3">รูปสินค้า(เพิ่มเติม)</label>
                                <div className="col-sm-9">
                                    <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                                </div>
                                <label for="staticEmail" className="col-sm-2 col-form-label text-right mr-3">รูปสินค้า(เพิ่มเติม)</label>
                                <div className="col-sm-9">
                                    <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                                </div>
                                <label for="staticEmail" className="col-sm-2 col-form-label text-right mr-3">รูปสินค้า(เพิ่มเติม)</label>
                                <div className="col-sm-9">
                                    <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                                </div>
                            </div>
                        </form>
                        <hr />
                        <div className="row">
                            <div className="col-11">
                                <button className="btn btn-success pull-right">Save</button>
                                <Link href="productmanagement">
                                    <button className="btn btn-danger pull-right mr-2">Cancel</button>
                                </Link>
                            </div>
                        </div>
                        
                    </Portlet>
                </div>
            </div>
        </AdminLayout>
    </div>
)

export default ProductManagement