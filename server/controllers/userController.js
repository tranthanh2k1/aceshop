const User = require('../models/user.js')

exports.userById = (req, res, next, iduser) => {
    User.findById(iduser, (err, data) => {
        if (err || !data) {
            return res.status(401).json({
                err: "Không tìm thấy user"
            })
        }
        req.profile = data;
        next();
    });
};

exports.addUser = (req, res, next) => {
    let user = new User(req.body);
    user.save((err, data) => {
        if (err || !data) {
            return res.status(400).json({
                status: false,
                error: "Thêm tài khoản thất bại"
            })
        }
        res.status(200).json({
            status: true,
            message: "Thêm tài khoản thành công",
            data
        });
    })
}

exports.showListUser = (req, res) => {
    User.find({}).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: "Khog tim thay user nao"
            })
        }

        res.status(200).json({
            success: true,
            message: "Lay list user thanh cong",
            data
        })
    })
}

exports.detailUser = (req, res, next) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile);
}

exports.updateUser = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.profile.id },
        { $set: req.body },
        { new: true },
        (err, data) => {
            if (err) {
                return res.status(400).json({
                    error: "Không thể update user"
                })
            }
            req.profile.hashed_password,
                req.profile.salt,
                res.json(user)
        }
    );
};

exports.removeUser = (req, res) => {
    let user = req.profile;

    user.remove((err, data) => {
        if (err) {
            return res.status(401).json({
                success: false,
                message: "Xoas user that bai"
            })
        }

        res.status(200).json({
            success: true,
            message: "Xoas user thanh cong",
            data
        })
    })
}


