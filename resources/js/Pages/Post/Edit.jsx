import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, useForm, Head } from "@inertiajs/inertia-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Edit = (props) => {
    const { post } = usePage().props;
    const { data, setData, put, errors } = useForm({
        title: post.title || "",
        description: post.description || "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        put(route("posts.update", post.id));
    }
    function destroy() {
        Inertia.delete(route("posts.destroy", post.id));
    }
    function stripHTML(myString) {
        return myString.replace(/(<([^>]+)>)/gi, "");
    }

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Edit Post" />
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
                                /
                            </span>
                            Edit
                        </h1>
                    </div>
                    <div className="max-w-3xl p-8 bg-white rounded shadow">
                        <form name="createForm" onBlur={handleSubmit}>
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
                                <div className="mb-4">
                                    <label className="">Description</label>
                                    <textarea
                                        type="text"
                                        className="w-full rounded h-48"
                                        label="description"
                                        name="description"
                                        errors={errors.description}
                                        value={stripHTML(data.description)}
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <span className="text-red-600">
                                        {errors.description}
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    onClick={destroy}
                                    tabIndex="-1"
                                    type="button"
                                    className="px-4 py-2 text-white bg-red-500 rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
