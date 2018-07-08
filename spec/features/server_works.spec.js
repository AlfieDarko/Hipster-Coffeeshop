import retry from 'promise-retry';
import express from 'express'
import path from 'path'
import { prepareDriver, cleanupDriver } from '../helpers/browserAutomation';
import { expect } from 'chai';


describe('Server!', () => {
    let server
    let driver
            before((done) => {
                const app = express()
                app.use('/', express.static(path.resolve(__dirname, '../../dist')))
                server = app.listen(8080, done)
            })
            after(() => {
                server.close()
            })

            before(async () => {
                driver = await prepareDriver()
            })
            after(() => cleanupDriver(driver))
            it('should work', async function () {

                await driver.get('http://localhost:8080')

                await retry(async () => {
                    const title = await driver.getTitle()

                    expect(title).to.equal('Java&Crisp CoffeeShop')
                })

            })
        })
