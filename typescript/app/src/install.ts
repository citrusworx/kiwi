// This is an install script to set up settings for Kiwi Engine
// This sets up initial configuration for databases, names, etc.
class KiwiKernel {
    private _name!: string;
    private _version!: string;
    private _description!: string;

        
    constructor(name: string, version: string, description: string) {
        this._name = name;
        this._version = version;
        this._description = description;
    }
}
export {KiwiKernel}