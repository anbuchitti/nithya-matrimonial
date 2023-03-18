export default function SmartSearch() {
    return (
        <div className='smart-search'>
            <div className='bg-trans'>
                <div className='container'>
                    <div className='search-box'>
                        <h2>SMART SEARCH</h2>
                        <div className='form-group'>
                            <div className='form-control'>
                                <select name='gender'>
                                    <option>Looking For</option>
                                    <option>Bride</option>
                                    <option>Groom</option>
                                </select>
                            </div>
                            <div className='form-control'>
                                <select name='age_from'>
                                    <option>Age From</option>
                                    {
                                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((i) => (<option value={18 + i}>{18 + i}</option>))
                                    }
                                </select>
                                <select name='age_to'>
                                    <option>Age To</option>
                                    {
                                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((i) => (<option value={18 + i}>{18 + i}</option>))
                                    }
                                </select>
                            </div>
                            <div className='form-control'>
                                <select name='religion'>
                                    <option value=''>Religion</option>
                                    <option value={'hindu'}>Hindu</option>
                                    <option value={'muslim'}>Muslim</option>
                                    <option value={'christian'}>Christian</option>
                                </select>
                            </div>
                            <div className='form-control'>
                                <select name='caste'>
                                    <option value=''>Caste</option>
                                    <option value={'oc'}>OC</option>
                                    <option value={'bc'}>BC</option>
                                    <option value={'mbc'}>MBC</option>
                                    <option value={'sc'}>SC</option>
                                    <option value={'st'}>ST</option>
                                </select>
                            </div>
                            <div className='form-control'>
                                <button className='btn primary'>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}