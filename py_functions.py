# Make dict values lowercase while ignoring ints
def lower_dict_attr(d):
    new_dict = {}
    for k, v in d.items():
        if type(v) != str:
            new_dict[k] = v
        else:
            new_dict[k] = v.lower()
    return new_dict
