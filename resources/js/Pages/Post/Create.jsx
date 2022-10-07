import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, useForm } from "@inertiajs/inertia-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import BalloonEditor from "@ckeditor/ckeditor5-build-balloon";

const Create = (props) => {
    const { data, setData, errors, post } = useForm({
        title: "",
        description: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("posts.store"));
    }

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <div className="mt-20">
                <div className="container flex flex-col justify-center mx-auto">
                    <div>
                        <h1 className="mb-8 text-3xl font-bold">
                            <InertiaLink
                                href={route("posts.index")}
                                className="text-indigo-600 hover:text-indigo-700"
                            >
                                Posts
                            </InertiaLink>
                            <span className="font-medium text-indigo-600">
                                {" "}
                                /{" "}
                            </span>
                            Create
                        </h1>
                    </div>
                    <div className=" p-8 bg-white rounded shadow">
                        <form name="createForm" onSubmit={handleSubmit}>
                            <div className="flex flex-col">
                                <div className="mb-4">
                                    <label className="">Title</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2"
                                        label="Title"
                                        name="title"
                                        value={data.title}
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                    />
                                    <span className="text-red-600">
                                        {errors.title}
                                    </span>
                                </div>

                                <div className="mb-0">
                                    <label className="">Description</label>
                                    <CKEditor
                                        editor={BalloonEditor}
                                        onReady={(editor) => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log(
                                                "Editor is ready to use!",
                                                editor
                                            );
                                        }}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setData("description", data);
                                        }}
                                        onBlur={(event, editor) => {
                                            console.log("Blur.", editor);
                                        }}
                                        onFocusOut={(event, editor) => {
                                            console.log("Focus.", editor);
                                        }}
                                    />
                                    <span className="text-red-600">
                                        {errors.description}
                                    </span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
